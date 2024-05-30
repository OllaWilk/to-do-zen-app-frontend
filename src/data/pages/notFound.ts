interface NotFound {
  header: string;
  button: {
    text: string;
    link: string;
  };
}

export const notFound: NotFound = {
  header: 'Upss... It looks like you’ve drifted off course into the cosmos!',
  button: {
    text: ' Return to the main cocakpit',
    link: 'cockpit',
  },
};
