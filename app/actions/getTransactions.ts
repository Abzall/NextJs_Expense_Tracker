"use server";

import { db } from "@/lib/db";
import { Transaction } from "@/types/Transaction";
import { auth } from "@clerk/nextjs/server";

interface UserTransactions {
  transactions?: Transaction[];
  error?: string;
}

async function getTransactions(): Promise<UserTransactions> {
  const { userId } = await auth();

  if (!userId) {
    return {
      error: "User not found",
    };
  }
  try {
    const transactions = await db.transaction.findMany({
      where: { userId },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return { transactions };
  } catch (error) {
    return { error: "Database error" };
  }
}

export default getTransactions;
