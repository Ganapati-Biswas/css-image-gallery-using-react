import React , { useState }from 'react'

const SearchImage = ({searchText}) => {
    const [text,setText] = useState('');

    const onSubmit= (e)=>{
       e.preventDefault();
       searchText(text);
       setText('');
    }

    return (
        <div className=" max-w-sm rounded overfollow-hidden py-10 mx-auto">
            <form className="w-full max-w-sm" onSubmit={onSubmit}>
                <div className="flex items-center border-b border-blue-500 py-2">
                    <input value={text} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search images" onChange={e=>setText(e.target.value)}/>
                    <button className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                        Search
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SearchImage
