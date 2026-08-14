import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";

describe("presence.heartbeat", () => {
  it("rejects an empty listener session id before touching the database", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as never,
      res: {} as never,
    });

    await expect(caller.presence.heartbeat({ sessionId: "" })).rejects.toThrow();
  });
});
