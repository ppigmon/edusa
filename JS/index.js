// Splide for navigation
let splideNav = new Splide('#splide-nav', {
    type: 'slide',
    arrows: false,
    pagination: false,
    isNavigation: true,
    trimSpace: true,
    autoWidth: true,
    mediaQuery: 'min',
    lazyLoad: false,
}).mount()


// Splide for main content
let splideMain = new Splide('#splide-main', {
fixedHeight: "100vh",
drag: true,
rewind: true,
type: 'slide',
speed: 600,
mediaQuery: 'min',
}).mount();



splideMain.sync(splideNav).mount();