const _isIE11 = typeof window === 'undefined' ? false : !!(<any>window).MSInputMethodContext && !!(<any>document).documentMode;
const isEdge = /Edge\/\d./i.test(navigator.userAgent);

export let pdfDefaultOptions = {
  cursorToolOnLoad: 0,
  defaultUrl: '',
  defaultZoomValue: '',
  disableHistory: false,
  disablePageLabels: false,
  enablePrintAutoRotate: false,
  enableWebGL: false,
  eventBusDispatchToDOM: false,
  externalLinkRel: 'noopener noreferrer nofollow',
  externalLinkTarget: 0,
  historyUpdateUrl: false,
  imageResourcesPath: './images/',
  maxCanvasPixels: 16777216,
  pdfBugEnabled: false,
  removePageBorders: false,
  renderer: 'canvas',
  renderInteractiveForms: false,
  sidebarViewOnLoad: -1,
  scrollModeOnLoad: -1,
  spreadModeOnLoad: -1,
  textLayerMode: 1,
  useOnlyCssZoom: false,
  viewOnLoad: 0,
  cMapPacked: true,
  cMapUrl: () => '../' + pdfDefaultOptions.assetsFolder + '/cmaps/',
  disableAutoFetch: false,
  disableCreateObjectURL: false,
  disableFontFace: false,
  disableRange: false,
  disableStream: false,
  isEvalSupported: true,
  maxImageSize: -1,
  pdfBug: false,
  postMessageTransfers: true,
  verbosity: 1,
  workerPort: null,
  assetsFolder: 'assets',
  workerSrc: () => _isIE11 || isEdge ? './' + pdfDefaultOptions.assetsFolder + '/pdf.worker-es5.js' : './' + pdfDefaultOptions.assetsFolder + '/pdf.worker.js',
};

if ((<any>window).pdfDefaultOptions) {
  pdfDefaultOptions = (<any>window).pdfDefaultOptions;
} else {
  (<any>window).pdfDefaultOptions = pdfDefaultOptions;
}


