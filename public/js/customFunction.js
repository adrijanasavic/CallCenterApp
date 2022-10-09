let message = "Da li ste sigurno da hocete da obrisete?";

$(".deleteUserBtn").on("click", function () {
  let responseUser = confirm(message);
  if (responseUser) {
    // brisanje
    let id = $(this).attr("data-id");
    $.ajax({ url: "/admin/delete/user/" + id }).then((res) => {
      if (res) {
        window.location.href = "/admin";
      }
    });
  }
});

$(".deleteProductBtn").on("click", function () {
  let responseProduct = confirm(message);
  if (responseProduct) {
    let id = $(this).attr("data-id");
    $.ajax({ url: "/admin/delete/product/" + id }).then((res) => {
      if (res) {
        window.location.href = "/admin";
      }
    });
  }
});

$(".deleteCityBtn").on("click", function () {
  let responseCity = confirm(message);
  if (responseCity) {
    let id = $(this).attr("data-id");
    $.ajax({ url: "/admin/delete/city/" + id }).then((res) => {
      if (res) {
        window.location.href = "/admin";
      }
    });
  }
});
