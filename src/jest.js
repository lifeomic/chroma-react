// A test configuration file for consumers of chroma-react.

// Bumping framer-motion past v1 produces "instance.getTotalLength is not a function" error - https://github.com/framer/motion/issues/204
// JSDOM does not support getTotalLength - https://github.com/jsdom/jsdom/issues/1330
if (!SVGElement.prototype.getTotalLength) {
  SVGElement.prototype.getTotalLength = () => 1;
}
