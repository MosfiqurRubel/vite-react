const Header = () => {
  const city = ["Dhaka", "Rajshahi", "Chittagong", "Khulna"];

  return (
    <div>
      <ol>
        {city.map((item, i) => {
          return <li key={i.toString()}>{item}</li>;
        })}
      </ol>
    </div>
  );
};

export default Header;
