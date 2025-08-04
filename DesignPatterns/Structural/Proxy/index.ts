import { ISample } from "../../../ISample";
import { LazyImageLoadingSample } from "./LazyImageLoading";
import { CachingDataSample } from "./CachingData";

export const Samples: ISample[] = [new LazyImageLoadingSample(), new CachingDataSample()];
