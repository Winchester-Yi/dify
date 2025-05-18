'use client'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import { IndexingType } from '../../create/step-two'
import { OptionCard } from '../../create/step-two/option-card'
import { indexMethodIcon } from '../../create/icons'
import classNames from '@/utils/classnames'
import type { DataSet } from '@/models/datasets'
import type { ChunkingMode } from '@/models/datasets'
import Badge from '@/app/components/base/badge'

type IIndexMethodRadioProps = {
  value?: DataSet['indexing_technique']
  onChange: (v?: DataSet['indexing_technique']) => void
  disable?: boolean
  docForm?: ChunkingMode
  currentValue?: DataSet['indexing_technique']
}

const IndexMethodRadio = ({
  value,
  onChange,
  disable,
  docForm,
  currentValue,
}: IIndexMethodRadioProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames('w-full')}>
      <OptionCard
        disabled={disable}
        isActive={true}
        onSwitched={() => {
          if (!disable)
            onChange(IndexingType.QUALIFIED as DataSet['indexing_technique'])
        }}
        icon={
          <Image
            src={indexMethodIcon.high_quality}
            alt={t('datasetSettings.form.indexMethodHighQualityTip')}
          />
        }
        title={
          <div className='flex items-center'>
            {t('datasetCreation.stepTwo.qualified')}
            <Badge uppercase className='ml-auto border-text-accent-secondary text-text-accent-secondary'>
              {t('datasetCreation.stepTwo.recommend')}
            </Badge>
          </div>
        }
        description={t('datasetSettings.form.indexMethodHighQualityTip')}
      />
    </div>
  )
}

export default IndexMethodRadio
