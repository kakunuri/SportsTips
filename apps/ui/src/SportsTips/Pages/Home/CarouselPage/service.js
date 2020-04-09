export function getCarouselImages() {
  return new Promise((resolve, reject) => {
    let mockCarouselImages = [
      {
        href:
          "https://www.cricadium.com/wp-content/uploads/2019/05/Untitled-design-9.jpg",
      },
      {
        href:
          "https://images.financialexpress.com/2018/05/vs-graphics_final_1-1.jpg",
      },
      {
        href:
          "https://cdn.images.express.co.uk/img/dynamic/72/590x/Roger-Federer-vs-Novak-Djokovic-start-time-1204269.jpg?r=1573731501237",
      },
    ];
    resolve(mockCarouselImages);
  });
}
