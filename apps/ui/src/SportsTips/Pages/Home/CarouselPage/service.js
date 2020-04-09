export function getCarouselImages() {
  return new Promise((resolve, reject) => {
    let mockCarouselImages = [
      {
        href:
          "https://www.google.com/search?q=jpg+images&sxsrf=ALeKk0123YqWzKBqWM06xrt1WRGFz1ELpw:1586369803754&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjQh4qFuNnoAhV6zzgGHZyaBv0Q_AUoAXoECA8QAw&biw=1680&bih=939#imgrc=yIgGvQEa-cY36M",
      },
      {
        href:
          "https://www.google.com/search?q=sunrisers+hyderabad+vs+rcb+images&sxsrf=ALeKk01U-E8EBN1EZQHAvliSDN-5p6MENw:1585581460707&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjK-uidv8LoAhXJH7cAHZ0iDl8Q_AUoA3oECAsQBQ&biw=1680&bih=890#imgrc=ymI2RHauZWfu7M",
      },
      {
        href:
          "https://www.google.com/search?q=federer+vs+djokovic+images&sxsrf=ALeKk03FK9OOWf_FCMMz-Usr9Zp0pMYCxQ:1585581397495&tbm=isch&source=iu&ictx=1&fir=bM8Zd3IeG_odXM%253A%252CvLBElYro0uChLM%252C_&vet=1&usg=AI4_-kRke_VBWlvMGXmwiDFlYFaT67M_fA&sa=X&ved=2ahUKEwiW7tb_vsLoAhU-ILcAHeJfAioQ9QEwAnoECAoQGQ#imgrc=bM8Zd3IeG_odXM:",
      },
    ];
    resolve(mockCarouselImages);
  });
}
