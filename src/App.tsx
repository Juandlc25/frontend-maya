import { useEffect, useState } from "react";
import Table from "./components/Table";
import { COLUMNS } from "./constant";
import { Cat } from "./models/cat";
import CatDataService from "./services/cat.service";
import Loader from "./components/Loader/index";
import styles from "./app.module.scss";
import SearchInput from "./components/SearchInput";
import Modal from "./components/Modal";
import Form from "./components/Form";
import { CatsContext } from "./context/cat-context";

function App() {
  const [cats, setCats] = useState<Cat[]>([]);
  const [catApi, setCatApi] = useState<any[]>([]);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState<string>("");
  const CatsProvider = CatsContext.Provider;
  const retrieveCats = () => {
    CatDataService.getAll()
      .then((response: any) => {
        setCats(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/breeds")
      .then((res) => res.json())
      .then(setCatApi);
    retrieveCats();
  }, []);

  const filteredCats = cats.filter((cat) =>
    cat.name.match(new RegExp(search, "i"))
  );

  return (
    <CatsProvider value={{ catApi, setCatApi }}>
      <div className={styles.mainContainer}>
        <div className={styles.header}>
          <SearchInput
            name="search"
            type="text"
            value={search}
            setValue={setSearch}
            label="Search section"
            placeholder="Search by cat name"
          />
          <button className="pointer" onClick={() => setShow(true)}>
            Add a new cat
          </button>
          <button onClick={() => retrieveCats()}>Refresh</button>
        </div>
        <p style={{ color: "red" }}>
          To delete a cat click anywhere in the cat's row
        </p>
        {cats.length > 0 ? (
          <Table columns={COLUMNS} data={filteredCats} />
        ) : (
          <Loader />
        )}
        <Modal show={show} onClose={() => setShow(false)}>
          <Form setShow={setShow} />
        </Modal>
      </div>
    </CatsProvider>
  );
}

export default App;
