<Grid item xs={3}>
  <div sx={styles.gridListRoot}>
    <ImageList cols={1}>
      {images.map((image) => (
        <ImageListItem
          key={image.file_path}
          sx={styles.gridListTile}
          cols={1}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
            alt={image.poster_path}
          />
        </ImageListItem>
      ))}
    </ImageList>
  </div>
</Grid>