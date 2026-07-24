import { z } from "zod";

export const transactionSchema = z.object({
  title: z.string().min(2, "Title is required"),

  amount: z.coerce
    .number()
    .positive("Amount must be greater than 0"),

  type: z.enum(["income", "expense"]),

  category: z.string().min(1, "Category is required"),

  date: z.string().min(1, "Date is required"),

  note: z.string().optional(),
});