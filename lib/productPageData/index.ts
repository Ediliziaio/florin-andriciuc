import type { ProductPage } from "./types";
import { productPageEdiliziaInCloud } from "./edilizia-in-cloud";
import { productPageMarketingEdile } from "./marketing-edile";
import { productPageVenditaEdile } from "./vendita-edile";
import { productPageNumeriInEdilizia } from "./numeri-in-edilizia";

export type { ProductPage } from "./types";

export const productPages: Record<string, ProductPage> = {
  "edilizia-in-cloud": productPageEdiliziaInCloud,
  "marketing-edile": productPageMarketingEdile,
  "vendita-edile": productPageVenditaEdile,
  "numeri-in-edilizia": productPageNumeriInEdilizia,
};

export const productSlugs = Object.keys(productPages);
