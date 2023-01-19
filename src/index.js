module.exports = function check(str, bracketsConfig) {
  // your solution
  let k=0,open=[],close=[],fl1=0;
  for(let i=0;i<bracketsConfig.length;i++){
    open.push(bracketsConfig[i][0]);
    close.push(bracketsConfig[i][1]);
  }
  str=str.split('');
  if(str.length%2==1) return false;
  while(str.length>0){
    fl1=0;
    for(let i=0;i<str.length;i++){
      for(let j=0;j<open.length;j++){
        if(str[i]==open[j] && str[i+1]==close[j]){
          fl1=1;
          str.splice(i,2);
        }
      }
    }
    if(fl1==0)return false;
  }
  return true;
}