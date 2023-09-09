import ICON_IMAGES from "../images/icons/index";

export function GetIcon(image: string) {
  switch (image) {
    case 'RUNING':
      return ICON_IMAGES.RUNING;
    case 'DESIGN':
      return ICON_IMAGES.DESIGN;
    case 'PHOTO':
      return ICON_IMAGES.PHOTO;
    case 'CRYPTO':
      return ICON_IMAGES.CRYPTO;
    case 'BUSINESS':
      return ICON_IMAGES.BUSINESS;
    default:
      break;
  }
}
