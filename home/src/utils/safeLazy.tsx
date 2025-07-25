import React from 'react';

export function safeLazy(
  factory: () => Promise<{ default: React.ComponentType<any> }>,
  onError?: (error: Error) => void
) {
  return React.lazy(() =>
    factory().catch((error) => {
      console.error("Failed to load remote module", error);
      if (onError) onError(error);
      return { default: () => <div>MF yapısı şu anda kullanılamıyor. Bağlı projeleri çalıştırın!!</div> };
    })
  );
}
