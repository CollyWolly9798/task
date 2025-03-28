const btn = document.getElementById('play');

function transform() {
  const dataCopy = [...data];
  dataCopy.splice(5, 1);
  const newArray = [];
  dataCopy.forEach(function (item) {
    newArray.push({
      url: item.url,
      name: item.name,
      params: item.params,
      description: item.description,
      date: item.date,
    });
  });
  const newData = newArray.map(function (item) {
    return {
      url: `${'http://'}` + item.url,
      name: item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase(),
      params: `${item.params.status}=>${item.params.progress}`,
      description: item.description.slice(0, 15) + '...',
      date: new Date(item.date),
      isVisible: item.params.status,
    };
  });
  const filter = newData.filter(status => status.isVisible);
  console.log(filter);
}

btn.addEventListener('click', transform);
