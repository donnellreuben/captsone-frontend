function Header() {
    return (
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>
    );
}

function ProductsNew() {
    return (
      <div id="posts-new">
        <h1>New post</h1>
      </div>
    );
}

function ProductsIndex() {
    return ( 
      <div id="posts-index">
        <h1>All posts</h1>
      </div>
    );
}

function Footer() {
    return (
      <footer>
        <p>Copyright 2023</p>
      </footer>
    );
}

function Content() {
  return (
    <div>
      <ProductsNew />
      <ProductsIndex />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;