import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_RICK_AND_MORTY_All_CHARACTERS_URL: z.string().url(),
  NEXT_PUBLIC_RICK_AND_MORTY_All_EPISODE_URL: z.string().url(),
});

const result = envSchema.safeParse({
  NEXT_PUBLIC_RICK_AND_MORTY_All_CHARACTERS_URL:
    process.env.NEXT_PUBLIC_RICK_AND_MORTY_All_CHARACTERS_URL,
  NEXT_PUBLIC_RICK_AND_MORTY_All_EPISODE_URL:
    process.env.NEXT_PUBLIC_RICK_AND_MORTY_All_EPISODE_URL,
});

if (!result.success) {
  throw new Error("Invalid environment variables");
}

const env = result.data;
export { env };
