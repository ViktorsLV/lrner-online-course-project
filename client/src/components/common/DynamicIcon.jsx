import * as HIcons from '@heroicons/react/outline'

const DynamicIcon = ({icon, height, width, color, hover}) => {
  const {...icons} = HIcons
  const TheIcon = icons[icon]

  return (
    <>
      <TheIcon className={`h-${height} w-${width} text-${color}-500, {${hover} ? 'hover:text-${hover}-500' : ''}`} aria-hidden="true" />
    </>
  )
}

DynamicIcon.defaultProps = {
   color: 'accent',
   height: '10',
   width: '10',
   icon: 'DesktopComputerIcon'
}

export default DynamicIcon