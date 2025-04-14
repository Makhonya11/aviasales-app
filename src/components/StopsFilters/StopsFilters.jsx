/* eslint-disable */
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material"
import { useState } from "react"
import { updateAllFiltr, updateOneFilter } from "../../store/filterSlice"
import { useSelector, useDispatch } from "react-redux"
import './StopsFilters.css'

const StopsFilters = () => {

      const allFilters = useSelector((state) => state.filter.parent)
      const someFilter = useSelector((state) => state.filter.child)
      const dispatch = useDispatch()
      

      return (
        <div className="stop-filtr">
          <p>Количество пересадок</p>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={allFilters}
                  // Полузаполненное состояние
                  onChange={() => dispatch(updateAllFiltr())}
                />
              }
              label="Выбрать все"
              className="checkbox"
            />
    
            {Object.keys(someFilter).map((key) => (
              <FormControlLabel
                key={key}
                control={
                  <Checkbox
                    checked={someFilter[key]}
                    onChange={(e) => dispatch(updateOneFilter({key : e.target.name}))}
                    name={key}
                  />
                }
                label={key} // Динамическая подпись
                className="checkbox"
              />
            ))}
          </FormGroup>
        </div>
      );
    }
    export default StopsFilters