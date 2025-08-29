import { firestore } from "@/config/firebase";
import { ResponseType, WalletType } from "@/types";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import { uploadFileToCloudinary } from "./imageService";

export const createOrUpdateWallet = async (
  walletData: Partial<WalletType>
): Promise<ResponseType> => {
  try {
    let walletTOSave = { ...walletData };

    if (walletData.image) {
      const imageUploadRes = await uploadFileToCloudinary(
        walletData.image,
        "wallets"
      );

      if (!imageUploadRes.success) {
        return {
          success: false,
          msg: imageUploadRes.msg || "Failed to upload wallet icon",
        };
      }
      walletTOSave.image = imageUploadRes.data;
    }

    if (!walletData?.id) {
      // new wallet
      walletTOSave.amount = 0;
      walletTOSave.totalIncome = 0;
      walletTOSave.totalExpenses = 0;
      walletTOSave.created = new Date();
    }

    const walletRef = walletData?.id
      ? doc(firestore, "wallets", walletData?.id)
      : doc(collection(firestore, "wallets"));

    await setDoc(walletRef, walletTOSave, { merge: true }); //update only the data provided
    return { success: true, data: { ...walletTOSave, id: walletRef.id } };
  } catch (error: any) {
    console.log("error creating or updating wallet:", error);
    return { success: false, msg: error.message };
  }
};

export const deleteWallet = async (walletId: string): Promise<ResponseType> => {
  try {
    const walletRef = doc(firestore, "wallets", walletId);
    await deleteDoc(walletRef);

    //todo: delete all transactions related to this wallet
    return { success: true, msg: "Wallet deleted successfully" };
  } catch (err: any) {
    console.log("error deleting wallet:", err);
    return { success: false, msg: err.message };
  }
};
