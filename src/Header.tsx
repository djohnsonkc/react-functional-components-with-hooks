function Header(props: any) {
  return (
    <header
      className={`header ${props.menuOpened ? "body-pd" : ""}`}
      id="header"
    >
      <div className="header_toggle" onClick={props.onMenuToggle}>
        <i
          className={`bx bx-menu ${props.menuOpened ? "bx-x" : ""}`}
          id="header-toggle"
        ></i>
      </div>
      <div className="header_img">
        <img src="https://i.imgur.com/hczKIze.jpg" alt="" />
      </div>
    </header>
  );
}

export default Header;
