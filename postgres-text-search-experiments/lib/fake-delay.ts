export const TYPICAL_SERVER_DELAY = 200;
export const TYPICAL_DB_DELAY = 200;

export async function fakeDelay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
