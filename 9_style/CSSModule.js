import styles from './CSSModule.module.css';

const CSSModule = ()=>{
  return (
    <>
      <div className={styles.wrapper}>
        안녕하세요! 저는 <span className="global_style">CSS Module</span> 입니다
      </div>
      <div className={`${styles.wrapper} ${styles.free}` }>
        이건 CSS Module <span className='global_style'>클래스명을 두개</span> 썼어요
      </div>
    </>
  )
}

export default CSSModule;