import React from 'react'
import {
   StyledSelect,
   StyledOptions,
   StyledOption,
   StyledSelected
} from './style'



const Dropdown = ({ options, placeholder, selectedOption }) => {
   const ref = React.useRef(null)
   const [keyword, setKeyword] = React.useState('')
   const [selected, setSelected] = React.useState(null)
   const [isOptionsVisible, setIsOptionsVisible] = React.useState(false)

   return (
      <StyledSelect ref={ref}>
         <StyledSelected >
            <div onClick={() => setIsOptionsVisible(!isOptionsVisible)}>
               {selected !== null ? (
                     <span data-type="text">{options[selected].value}</span>
               ) : (
                     <input
                        type="text"
                        disabled
                        placeholder={placeholder}
                        value={keyword}
                        onChange={e => setKeyword(e.target.value.toLowerCase())}
                        onClick={() => setIsOptionsVisible(!isOptionsVisible)}
                     />
               )}
            </div>
         </StyledSelected>
         {isOptionsVisible && (
            <StyledOptions>
               {options
                  .map((option, index) => (
                     <StyledOption
                        key={option.id}
                        title={option.value}
                        onClick={() => {
                           setKeyword('')
                           setSelected(index)
                           selectedOption(option)
                           setIsOptionsVisible(!isOptionsVisible)
                        }}
                     >
                        <span>{option.value}</span>
                     </StyledOption>
                  ))}
            </StyledOptions>
         )}
      </StyledSelect>
   )
}

export default Dropdown;
