export const changeCssVAriables = (theme) => {
	const root = document.querySelector(":root");

    const arrCssProp = ['header', 'bdimage']
    arrCssProp.forEach((el) => {
        root.style.setProperty(`--theme-default-${el}`, `var(--theme-${theme}-${el})`)
    })

};
