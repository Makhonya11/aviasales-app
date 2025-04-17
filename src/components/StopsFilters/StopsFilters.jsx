import { Checkbox, FormControlLabel, FormGroup, Box } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import { useState } from 'react'
import { updateAllFiltr, updateOneFilter } from '../../store/filterSlice'
import { useSelector, useDispatch } from 'react-redux'
import styles from './StopsFilters.module.scss'

const StopsFilters = () => {
  const allFilters = useSelector((state) => state.filter.parent)
  const someFilter = useSelector((state) => state.filter.child)
  const dispatch = useDispatch()

  return (
    <div className={styles.stopFiltr}>
      <p>Количество пересадок</p>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={allFilters}
              icon={<div className={styles.box}></div>}
              checkedIcon={
                <div className={styles.box}>
                  <CheckIcon fontSize="small" />
                </div>
              }
              // Полузаполненное состояние
              onChange={() => dispatch(updateAllFiltr())}
            />
          }
          label="Все"
          className={styles.checkbox}
        />

        {Object.keys(someFilter).map((key) => (
          <FormControlLabel
            key={key}
            control={
              <Checkbox
                checked={someFilter[key]}
                icon={<div className={styles.box}></div>}
                checkedIcon={
                  <div className={styles.box}>
                    <CheckIcon fontSize="small" />
                  </div>
                }
                onChange={(e) => dispatch(updateOneFilter({ key: e.target.name }))}
                name={key}
              />
            }
            label={key} // Динамическая подпись
            className={styles.checkbox}
          />
        ))}
      </FormGroup>
    </div>
  )
}
export default StopsFilters
