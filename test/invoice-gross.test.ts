import { it, expect, vi } from "vitest";
import { createOrvelloClient } from "../src/index";
it("transports gross prices unchanged through the authenticated preview", async () => {
  const fetchImpl = vi.fn(async (_url: string, init?: RequestInit) => {
    expect(new Headers(init?.headers).get("Authorization")).toBe("Bearer test-token");
    expect(JSON.parse(init?.body as string).lineItems[0]).toEqual({title:"Website",quantity:1,unitPriceGross:"100.00"});
    return new Response(JSON.stringify({success:true,data:{totals:{net:"84.03",tax:"15.97",gross:"100.00",currency:"EUR"}}}),{headers:{"content-type":"application/json"}});
  });
  const client=createOrvelloClient({baseUrl:"https://bills.example",auth:"test-token",fetch:fetchImpl as typeof fetch});
  const result=await client.invoices.preview({invoiceDate:"2026-10-04",dueDate:"2026-10-18",currency:"EUR",lineItems:[{title:"Website",quantity:1,unitPriceGross:"100.00"}]});
  expect(result.totals.tax).toBe("15.97");
  expect(fetchImpl.mock.calls[0][0]).toBe("https://bills.example/invoices/external/preview");
});
