import { Container, Grid } from "@mui/material";
import { useRandomDataContext } from "../context/randomData";
import ItemCard from "./ItemCard";
import { useState } from "react";

function ItemGrid() {
  const { randomData } = useRandomDataContext();

  const [candidates, setCandidates] = useState([]);

  console.log(candidates);

  return (
    <Grid container gap={2}>
      {randomData?.map((item) => (
        <Grid xs="auto" md="auto" lg="auto">
          <ItemCard props={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ItemGrid;
