$(".deleteUserBtn").on("click", function () {
  let responseUser = confirm("Da li ste sigurno da hocete da obrisete?");
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
