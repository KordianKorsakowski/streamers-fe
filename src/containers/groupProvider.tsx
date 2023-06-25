import { SnackbarProvider } from './SnackbarContainer';
import { StreamersProvider } from './StreamersContainer';

const providers = [SnackbarProvider, StreamersProvider];

export const ProviderGroup = ({ children }: any) => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const ReducedProviders = providers.reduceRight((children, Provider) => {
    return <Provider>{children}</Provider>;
  }, children);
  return <>{ReducedProviders}</>;
};
