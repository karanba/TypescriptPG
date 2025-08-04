import { ISample } from "../../../ISample";
import { LazyImageLoadingSample } from "./LazyImageLoading";
import { CachingDataSample } from "./CachingData";
import { DocumentProtectionSample } from "./DocumentProtection";

export const Samples: ISample[] = [
  new LazyImageLoadingSample(),
  new CachingDataSample(),
  new DocumentProtectionSample(),
];
