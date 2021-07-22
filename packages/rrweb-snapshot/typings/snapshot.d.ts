import { serializedNodeWithId, INode, idNodeMap, MaskInputOptions, SlimDOMOptions, MaskTextFn, MaskInputFn, KeepIframeSrcFn } from './types';
export declare const IGNORED_NODE = -2;
export declare function absoluteToStylesheet(cssText: string | null, href: string): string;
export declare function absoluteToDoc(doc: Document, attributeValue: string): string;
export declare function transformAttribute(doc: Document, tagName: string, name: string, value: string): string;
export declare function _isBlockedElement(element: HTMLElement, blockClass: string | RegExp, blockSelector: string | null): boolean;
export declare function needMaskingText(node: Node | null, maskTextClass: string | RegExp, maskTextSelector: string | null): boolean;
export declare function serializeNodeWithId(n: Node | INode, options: {
    doc: Document;
    map: idNodeMap;
    blockClass: string | RegExp;
    blockSelector: string | null;
    maskTextClass: string | RegExp;
    maskTextSelector: string | null;
    skipChild: boolean;
    inlineStylesheet: boolean;
    maskInputOptions?: MaskInputOptions;
    maskTextFn: MaskTextFn | undefined;
    maskInputFn: MaskInputFn | undefined;
    slimDOMOptions: SlimDOMOptions;
    keepIframeSrcFn?: KeepIframeSrcFn;
    recordCanvas?: boolean;
    preserveWhiteSpace?: boolean;
    onSerialize?: (n: INode) => unknown;
    onIframeLoad?: (iframeINode: INode, node: serializedNodeWithId) => unknown;
    iframeLoadTimeout?: number;
}): serializedNodeWithId | null;
declare function snapshot(n: Document, options?: {
    blockClass?: string | RegExp;
    blockSelector?: string | null;
    maskTextClass?: string | RegExp;
    maskTextSelector?: string | null;
    inlineStylesheet?: boolean;
    maskAllInputs?: boolean | MaskInputOptions;
    maskTextFn?: MaskTextFn;
    maskInputFn?: MaskTextFn;
    slimDOM?: boolean | SlimDOMOptions;
    recordCanvas?: boolean;
    preserveWhiteSpace?: boolean;
    onSerialize?: (n: INode) => unknown;
    onIframeLoad?: (iframeINode: INode, node: serializedNodeWithId) => unknown;
    iframeLoadTimeout?: number;
    keepIframeSrcFn?: KeepIframeSrcFn;
}): [serializedNodeWithId | null, idNodeMap];
export declare function visitSnapshot(node: serializedNodeWithId, onVisit: (node: serializedNodeWithId) => unknown): void;
export declare function cleanupSnapshot(): void;
export default snapshot;
