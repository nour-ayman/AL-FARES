import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Skeleton,
} from "@mui/material";
import axios from "axios";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch categories
  const fetchCategories = async () => {
    try {
      const res = await axios.get("/api/categories");
      setCategories(res.data);
    } catch (error) {
      console.error("Error loading categories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSelectCategory = (category) => {
    console.log("Selected:", category);
    // You can navigate or filter products here
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Categories
      </Typography>

      <Grid container spacing={3}>
        {loading
          ? [...Array(6)].map((_, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Skeleton variant="rounded" height={90} />
              </Grid>
            ))
          : categories.map((cat) => (
              <Grid item xs={12} sm={6} md={4} key={cat._id}>
                <Card sx={{ borderRadius: 3 }}>
                  <CardActionArea onClick={() => handleSelectCategory(cat)}>
                    <CardContent>
                      <Typography variant="h6" fontWeight={600}>
                        {cat.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {cat.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
      </Grid>
    </Box>
  );
}
