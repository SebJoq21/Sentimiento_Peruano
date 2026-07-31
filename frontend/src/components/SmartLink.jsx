import { Link } from 'react-router-dom'

function SmartLink({ href = '#', className = '', children, ...props }) {
  const isInternal = href.startsWith('/')

  if (isInternal) {
    return (
      <Link to={href} className={className} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  )
}

export default SmartLink
