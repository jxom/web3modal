import type { EthereumClient } from '@web3modal/ethereum'

export interface MobileWallet {
  id: string
  name: string
  links: {
    universal: string
    native?: string
  }
}

export interface DesktopWallet {
  id: string
  name: string
  links: {
    native: string
    universal: string
  }
}

// -- ConfigCtrl ------------------------------------------- //
export interface ConfigCtrlState {
  projectId?: string
  themeMode?: 'dark' | 'light'
  themeColor?:
    | 'blackWhite'
    | 'blue'
    | 'default'
    | 'green'
    | 'magenta'
    | 'orange'
    | 'purple'
    | 'teal'
  themeBackground?: 'gradient' | 'themeColor'
  standaloneChains?: string[]
  mobileWallets?: MobileWallet[]
  desktopWallets?: DesktopWallet[]
  walletImages?: Record<string, string>
  chainImages?: Record<string, string>
  enableNetworkView?: boolean
  enableStandaloneMode?: boolean
}

// -- ModalCtrl --------------------------------------- //
export interface ModalCtrlState {
  open: boolean
}

// -- OptionsCtrl --------------------------------------- //
export interface OptionsCtrlState {
  selectedChainId?: number
  chains?: EthereumClient['chains']
  standaloneChains?: string[]
  standaloneUri?: string
  isStandalone: boolean
  isCustomDesktop: boolean
  isCustomMobile: boolean
  isExplorer: boolean
}

// -- ExplorerCtrl ------------------------------------------- //
export interface ExplorerCtrlState {
  wallets: ListingResponse & { page: number }
  search: ListingResponse & { page: number }
  previewWallets: Listing[]
  recomendedWallets: Listing[]
}

export interface PageParams {
  page?: number
  search?: string
  entries?: number
  version?: number
  device?: 'desktop' | 'mobile'
  order?: 'asc' | 'desc'
  chains?: string
}

export interface PlatformInfo {
  native: string
  universal: string
}

export interface Listing {
  id: string
  name: string
  description: string
  homepage: string
  chains: string[]
  versions: string[]
  app_type: string
  image_id: string
  image_url: {
    sm: string
    md: string
    lg: string
  }
  app: {
    browser: string
    ios: string
    android: string
    mac: string
    window: string
    linux: string
  }
  mobile: PlatformInfo
  desktop: PlatformInfo
  metadata: {
    shortName: string
    colors: {
      primary: string
      secondary: string
    }
  }
}

export interface ListingResponse {
  listings: Listing[]
  total: number
}

// -- ToastCtrl ------------------------------------------ //
export interface ToastCtrlState {
  open: boolean
  message: string
  variant: 'error' | 'success'
}

// -- RouterCtrl --------------------------------------------- //
export type RouterView =
  | 'CoinbaseExtensionConnector'
  | 'CoinbaseMobileConnector'
  | 'ConnectWallet'
  | 'DesktopConnector'
  | 'GetWallet'
  | 'Help'
  | 'InjectedConnector'
  | 'MetaMaskConnector'
  | 'Qrcode'
  | 'SelectNetwork'
  | 'WalletExplorer'
  | 'WalletFilter'

export interface DesktopConnectorData {
  name: string
  native?: string
  universal?: string
  icon?: string
  walletId?: string
}

export interface RouterCtrlState {
  history: RouterView[]
  view: RouterView
  data?: {
    DesktopConnector: DesktopConnectorData
  }
}

// -- ClientCtrl ------------------------------------------- //
export interface ClientCtrlState {
  initialized: boolean
  ethereumClient?: EthereumClient
}
