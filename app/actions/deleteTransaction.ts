"use server"

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

interface Delete {
    message?: string
    error?: string
}

async function deleteTransaction(transactionID: string): Promise<Delete> {
  const { userId } = await auth();

  if (!userId) {
    return {
      error: "User not found",
    };
  }
  try {
    await db.transaction.delete({
        where: {
            id: transactionID,
            userId
        }
    })

    revalidatePath('/')

    return { message: "Transaction deleted" };
  } catch (error) {
    return { error: "Database error" };
  }
}

export default deleteTransaction;
