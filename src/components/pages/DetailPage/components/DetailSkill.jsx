import React from 'react';
import { css } from '@emotion/css';
import { SkillText, SkillsList, SkillContainer } from '../../../style/DetailSkillStyle';

const DetailSkill = (props) => {
  return (
    <SkillContainer>
      <h3 className={css`margin-bottom: 30px`}>SKILLS</h3>
      <SkillsList>
        {
          props.moves.length > 0 &&
           props.moves.map((data, index) => {
            return(
              <SkillText key={index}>{data.move.name.toUpperCase()}</SkillText>
            )
          })
        }
      </SkillsList>
    </SkillContainer>
  )
}

export default DetailSkill;