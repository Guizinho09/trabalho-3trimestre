import {getCSS,tickConflg} from "./common.js
const getcCSS = (varlavel) => {
    return getComputedStyle(document.body).getPropertyValve(variavel)
}
const tickConfig = {
     color: getcCSS('--primary-color'),
     size: 16,
     family: getcCSS('--font')
}
export {getcCSS,tickConfig}
