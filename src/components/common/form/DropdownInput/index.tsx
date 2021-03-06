import React from 'react';
import BaseDownshift, { DownshiftInterface } from 'downshift';
import { FieldRenderProps } from 'react-final-form';
import { useSelector } from 'hooks';
import Input from 'common/form/Input';
import { InputContainer, StyledInput, Highlight, Bar, Label } from '../Input/styled';
import { DropdownContainer, DropdownList, ListItem, DropdownIcon } from './styled';

type Select = {
  id: number;
  name: string;
  icon: string;
};

const Downshift = BaseDownshift as DownshiftInterface<Select>;

export const DropdownInput: React.FC<DropdownInputProps> = ({ input, meta, items, ...props }) => {
  const isMobile = useSelector((state) => state.ui.isMobile);

  if (isMobile) {
    return (
      <DropdownContainer>
        <Input {...props} input={input} meta={meta} as="select">
          {items!.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </Input>

        <DropdownIcon isopen={!!meta.active && meta.active.toString()} />
      </DropdownContainer>
    );
  }

  const handleChange = (selection: Select | null) => {
    if (selection) {
      // @ts-ignore Type is wrong
      input.onChange(selection.id);
    }
  };

  return (
    <Downshift
      {...input}
      onChange={handleChange}
      itemToString={(item) => item ? item.name : ''}
    >
      {({
        getInputProps,
        getLabelProps,
        getMenuProps,
        getItemProps,
        getRootProps,
        isOpen,
        openMenu,
        inputValue,
        highlightedIndex,
      }) => (
        <DropdownContainer {...getRootProps()}>
          <InputContainer>
            {/*
              // @ts-ignore Unreadable error */}
            <StyledInput
              {...getInputProps({
                name: input.name,
                placeholder: props.placeholder,
              })}
              onClick={() => openMenu()}
              onFocus={() => openMenu()}
            />
            <Highlight />
            <Bar />
            <Label {...getLabelProps()}>{props.label}</Label>
          </InputContainer>

          {isOpen && (
            <DropdownList {...getMenuProps()}>
              {inputValue ? (
                items!
                  .filter((item) => (
                    !inputValue || item.name.toLowerCase().includes(inputValue.toLowerCase()
                    )))
                  .map((item, i) => (
                    <ListItem
                      {...getItemProps({ key: item.name, item })}
                      isHighlighted={highlightedIndex === i}
                    >
                      <img src={item.icon} alt="" loading="lazy" />
                      {item.name}
                    </ListItem>
                  ))
              ) : (
                items!.map((item, i) => (
                  <ListItem
                    {...getItemProps({ key: item.name, item })}
                    isHighlighted={highlightedIndex === i}
                  >
                    <img src={item.icon} alt="" loading="lazy" />
                    {item.name}
                  </ListItem>
                ))
              )}
            </DropdownList>
          )}

          <DropdownIcon isopen={isOpen} />
        </DropdownContainer>
      )}
    </Downshift>
  );
};

type DropdownInputProps = FieldRenderProps<HTMLInputElement> & {
  items?: Select[];
  label?: string;
  placeholder?: string;
}

export default DropdownInput;
