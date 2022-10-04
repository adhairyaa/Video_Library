import { createContext, useContext, useReducer } from "react";
const DataContext = createContext();

const Data = [
  {
    VideoLink: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/xR3V5Ow2dTI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; 
     encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
    VideoTitle: "Baller",
    VideoCategory: "Music",
    VideoLikes: "409K",
    VideoViews: "10M",
  },
  {
    VideoLink: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/xR3V5Ow2dTI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; 
     encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
    VideoTitle: "Baller",
    VideoCategory: "Music",
    VideoLikes: "409K",
    VideoViews: "10M",
  },
  {
    VideoLink: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/xR3V5Ow2dTI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; 
     encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
    VideoTitle: "Baller",
    VideoCategory: "Music",
    VideoLikes: "409K",
    VideoViews: "10M",
  },
  {
    VideoLink: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/xR3V5Ow2dTI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; 
     encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
    VideoTitle: "Baller",
    VideoCategory: "Music",
    VideoLikes: "409K",
    VideoViews: "10M",
  },
  {
    VideoLink: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/xR3V5Ow2dTI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; 
     encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
    VideoTitle: "Baller",
    VideoCategory: "Music",
    VideoLikes: "409K",
    VideoViews: "10M",
  },
];

export const DataProvider = ({ children }) => {
  const handleDispatch = (action, state) => {
    switch (action.type) {
    }
  };
  const [state, dispatch] = useReducer(handleDispatch, {
    Data: Data,
    Watchlist: [],
    Liked: [],
    History: [],
    SortBy: null,
    Category: null,
  });
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataProvider = () => useContext(DataContext);
