import mobx from 'mobx';

// Required for client side title and description change, you can add more
//-----------
export default store => mobx.autorun(() => {
  const { app } = store;
  document.lang = app.locale;
  document.title = (app.title) ? (app.title + ' • ' + app.name) : app.name;
  document.querySelector("meta[name='description']").content = app.description;
});
