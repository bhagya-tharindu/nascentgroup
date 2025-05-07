const renderStars = (count) => {
  return [...Array(5)].map((_, i) => (
    <span key={i}>{i < count ? "★" : "☆"}</span>
  ));
};

export default renderStars;
