import { ISample } from "../../../ISample";
import { LazyImageLoadingSample } from "./LazyImageLoading";
import { CachingDataSample } from "./CachingData";
import { DocumentProtectionSample } from "./DocumentProtection";
import { RemoteUserServiceProxySample } from "./RemoteUserServiceProxy";
import { SmartReferenceSample } from "./SmartReference";

export const Samples: ISample[] = [
  new LazyImageLoadingSample(),
  new CachingDataSample(),
  new DocumentProtectionSample(),
  new RemoteUserServiceProxySample(),
  new SmartReferenceSample()
];
