module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        half: '50%',
      },
    },
  },
  shortcuts: {
    'bg-red': 'bg-[#e24130]',
    'bg-blue': 'bg-[#303d4f]',
    'text-red': 'text-[#e24130]',
    'text-blue': 'text-[#303d4f]',
    'flex-center': 'flex flex-col items-center',
    'btn': 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full dark:bg-red',
    // 'btn-green': 'text-blue bg-green-500 hover:bg-blue-700 !important',
    // btn: {
    //   color: 'white',
    //   '@apply': 'py-2 px-4 font-semibold rounded-lg',
    //   '&:hover': {
    //     '@apply': 'bg-red-700',
    //     color: 'black',
    //   },
    // },
    // 'btn-green': 'text-white bg-green-500 hover:bg-red-700',
  },
  variants: {},
  plugins: [],
  attributify: true,
}
