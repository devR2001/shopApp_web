<template>
  <nav class="navbar">
    <div>
      <img
        src="@/assets/sOliver.svg"
        alt="s.Oliver Logo"
        class="logo"
        href="#"
      />
    </div>
    <div class="links">
      <ul>
        <li class="search-input">
          <input type="text" placeholder="Suchen" />
        </li>
        <li class="li-element"><a href="#">Shops</a></li>
        <li class="li-element"><a href="#">Mein Konto</a></li>
        <li class="li-element"><a href="#">Wunschliste</a></li>
        <li class="li-element"><a href="#">Warenkorb</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.links ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

.links li a {
  text-decoration: none;
  color: #000;
}

.li-element {
  margin-top: 7px;
}

.search-input input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  width: 200px;
  transition: border-color 0.3s;
}

.search-input input:focus {
  border-color: #000;
}

@media (max-width: 767px) {
  .navbar {
    flex-direction: column;
    align-items: center;
  }

  .links ul {
    flex-direction: column;
  }
}
</style>
