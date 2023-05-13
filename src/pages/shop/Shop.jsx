import './main.css'

export default function Shop() {
  return (
    <div className="container">
      <h2>Shopping 🛒 List</h2>
      <div className="shop">
        <div class="todo">
        <input class="todo__value" type="text" placeholder=" 🍳 🥚 🍮 "/>
          <input class="todo__checkbox" type="checkbox" />
        </div>
        <div class="todo">
          <input class="todo__value" type="text" placeholder=" 🍼 🥛 🧋 " />
          <input class="todo__checkbox" type="checkbox" />
        </div>
        <div class="todo">
          <input class="todo__value" type="text" placeholder=" 🧀 🍕 🍰 " />
          <input class="todo__checkbox" type="checkbox" />
        </div>
        <div class="todo">
          <input class="todo__value" type="text" placeholder=" 🍞 🥐 🥖 " />
          <input class="todo__checkbox" type="checkbox" />
        </div>
        <div class="todo">
          <input class="todo__value" type="text" placeholder=" 🍗 🥩 🥓 " />
          <input class="todo__checkbox" type="checkbox" />
        </div>
        <div class="todo">
          <input class="todo__value" type="text" placeholder=" 🍅 🍆 🥕 " />
          <input class="todo__checkbox" type="checkbox" />
        </div>
        <div class="todo">
          <input class="todo__value" type="text" placeholder=" 🍈 🍇 🍋 " />
          <input class="todo__checkbox" type="checkbox" />
        </div>
        <div class="todo">
          <input class="todo__value" type="text" placeholder=" 🦞 🐟 🦀 " />
          <input class="todo__checkbox" type="checkbox" />
        </div>
        <div class="todo">
          <input class="todo__value" type="text" placeholder=" 🍵 ☕ 🧋 " />
          <input class="todo__checkbox" type="checkbox" />
        </div>
        <div class="todo">
          <input class="todo__value" type="text" placeholder=" 🍟 🌭 🍿 " />
          <input class="todo__checkbox" type="checkbox" />
        </div>
      </div>      
    </div>
  )
}