# **7-1 最大公约数和最小公倍数**

```c++
#include<bits/stdc++.h>
using namespace std;
using LL = long long;
int main(){
	double eps;
	scanf("%le", &eps);
	double cur = 1;
	double ans = 1;
	double cursum = 1;
	while(cursum >= eps){
		cursum *= cur / (2 * cur + 1);
		ans += cursum;
		cur += 1;
	}
	printf("PI = %.5f", 2 * ans);
	return 0;
}
```

# 7-2 近似求PI

# **7-3 寻找完美数**

```c++
#include<bits/stdc++.h>
using namespace std;
using LL = long long;
const int N = 1e5 + 10;

int main(){
	int a, b;
	cin >> a >> b;
	vector<int> ans;
	for(int i = a; i <= b; i ++ ){
		int sum = 0;
		for(int j = 1; j < i; j ++ ){
			if(i % j == 0) sum += j;
		}
		if(sum == i) ans.push_back(i);
	}
	if(!ans.size()) cout << "None" << endl;
	else{
		for(int i = 0; i < (int)ans.size(); i ++ ){
			cout << ans[i] << " \n"[i == (int)ans.size() - 1];
		}
	}
	return 0;
}
```

# **7-4 最接近数**

```c++
#include<bits/stdc++.h>
using namespace std;
using LL = long long;
const int N = 1e5 + 10;

int main(){
	int n;
	cin >> n;
	vector<int> a(n), b;
	for(int i = 0; i < n; i ++ ){
		cin >> a[i];
	}
	sort(a.begin(), a.end());
	for(int i = 1; i < n; i ++ ){
		b.push_back(a[i] - a[i - 1]);
	}
	sort(b.begin(), b.end());
	cout << b[0] << endl;
	return 0;
}

```

# 7-2 完全数

```c++
#include<bits/stdc++.h>
using namespace std;
using LL = long long;
int main(){
	int n;
	cin >> n;
	for(int i = 1; i <= n; i ++ ){
		vector<int> ans;
		int sum = 0;
		for(int j = 1; j < i; j ++ ){
			if(i % j == 0){
				ans.push_back(j);
				sum += j;
			}
		}
		if(sum == i){
			cout << sum << "=";
			for(int j = 0; j < (int)ans.size(); j ++ ){
				
				cout << ans[j];
				cout << "+\n"[j == (int)ans.size() - 1];
			}
		}
		sum = 0;
		ans.clear();
	}
	return 0;
}
```

# **7-1 冒泡法排序**

```c++
#include<bits/stdc++.h>
using namespace std;
using LL = long long;
const int N = 1e5 + 10;

int main(){
	int n, k;
	cin >> n >> k;
	vector<int> a(n);
	for(int i = 0; i < n; i ++ ){
		cin >> a[i];
	}
	for(int i = 0; i < k; i ++ ){
		for(int j = 0; j < n - i - 1; j ++ ){
			if(a[j] > a[j + 1]) swap(a[j], a[j + 1]);
		}
	}
	for(int i = 0; i < n; i ++ ){
		cout << a[i] << " \n"[i == n - 1];
	}
	return 0;
}
```

# 7-4 欧几里德算法求最大公约数

```c++
int main(){
	int a, b;
	cin >> a >> b;
	cout << __gcd(a, b);
	return 0;
}
```

# 7-5 求n至少为多大时，n个1组成的整数能被2023整除

```c++
#include<bits/stdc++.h>
using namespace std;
using LL = long long;
int main(){
	int x = 0, cnt = 0;
	while(x < 2023){
		x = x * 10 + 1;
		cnt ++ ;
	}
	while(x){
		//cout << x / 2023;
		x %= 2023;
		if(x == 0) break;
		x = x * 10 + 1;
		cnt ++ ;
	}
	cout << cnt;
	return 0;
}
```

# **7-2 整除光棍**

```c++
#include<bits/stdc++.h>
using namespace std;
int main(){
    int x, gun = 0, cnt = 0;
    cin >> x;
    while(gun < x){
        gun = gun * 10 + 1;
        cnt ++ ;
    }
    while(1){
        cout << gun / x;
        gun %= x;
        if(gun == 0) break;
        gun = gun * 10 + 1;
        cnt ++ ;
    }
    cout << " " << cnt;
    return 0;
}
```

# **7-3 高效查重-I**

```c++
#include<bits/stdc++.h>
using namespace std;
using LL = long long;
const int N = 1e5 + 10;

int main(){
	int n;
	cin >> n;
	set<int> st;
	for(int i = 0; i < n; i ++ ){
		int x;
		cin >> x;
		st.insert(x);
	}
	if((int)st.size() == n) cout << 0 << endl;
	else{
		cout << n - (int)st.size() << endl;
	}
	return 0;
}
```

# **7-4 寻找第k小的数**

# 7-7 查找整数

```c++
int main(){
	int n, x;
	cin >> n >> x;
	vector<int> a(n);
	for(int i = 0; i < n; i ++ ){
		cin >> a[i];
	}
	auto pos = find(a.begin(), a.end(), x);
	if(pos == a.end()){
		cout << "Not Found" << endl;
	}
	else{
		int index = distance(a.begin(), pos);
		cout << index << endl;
	}
	return 0;
}
//方法二
int main(){
	int n, x;
	cin >> n >> x;
	vector<int> a(n);
	for(int i = 0; i < n; i ++ ){
		cin >> a[i];
	}
	int pos;
	for(pos = 0; pos < n; pos ++ ){
		if(a[pos] == x){
			cout << pos << endl;
			break;
		}
	}
	if(pos == n) cout << "Not Found" << endl;
	return 0;
}
```

# 7-8 二分查找法之过程（样例缺少)

```c++
缺样例
```

# 7-9 判定是否是2的整数次幂

```c++
#include<bits/stdc++.h>
using namespace std;
using LL = long long;
int main(){
	int n;
	cin >> n;
	if((n & (n - 1)) == 0) cout << "YES" << endl;
	else cout << "NO" << endl;
	return 0;
}
//0 1 2 3 4  5  6  7   8   9   10
//1 2 4 8 16 32 64 128 256 512 1024
```

# 7-10 阶乘之和取模（有坑）

```c++
#include<bits/stdc++.h>
using namespace std;
using LL = long long;
LL cal(LL n){
	if(n == 1) return 1;
	return cal(n - 1) * n % 1000000;
}
int main(){
	int n;
	cin >> n;
    if(n >= 24){ //当n>=24时，后面的数据都是一样的
		printf("940313\n");
		return 0;
	}
	LL sum = 0;
	for(LL i = 1; i <= n; i ++ ){
		sum = (sum + cal(i)) % 1000000;
	}
	cout << sum % 1000000 << endl;
	return 0;
}
```

# 7-11 角谷猜想

```c++
int main(){
	int n, cnt = 0;
	cin >> n;
	while(n != 1){
		if(n & 1) n = 3 * n + 1;
		else n = n / 2;
		cnt ++ ;
	}
	cout << cnt;
	return 0;
}
```

# 7-12 猴子选大王

```c++
#include<bits/stdc++.h>
using namespace std;
using LL = long long;

int main(){
	int n;
	cin >> n;
	int cnt = 1;
	queue<int> q;
	for(int i = 1; i <= n; i ++ ){
		q.push(i);
	}
	while(q.size() != 1){
		if(cnt == 3){
			cnt = 1;
			q.pop();
		}
		else{
			q.push(q.front());
			q.pop();
			cnt ++ ;
		}
		
	}
	cout << q.front();
	return 0;
}
```

# **7-1 约瑟夫环**

```c++
#include<bits/stdc++.h>
using namespace std;
int main(){
	int n, p, cnt = 1;
	cin >> n >> p;
	queue<int> q;
	for(int i = 1; i <= n; i ++ ){
		q.push(i);
	}
	while(q.size()){
		if(cnt == p){
			cnt = 1;
			cout << q.front();
			if(q.size() != 1) cout << " ";
			q.pop();
		}
		else{
			q.push(q.front());
			q.pop();
			cnt ++ ;
		}
	}
}
```

# **7-2 埃筛法求区间素数**

```c++
#include<bits/stdc++.h>
using namespace std;
const int N = 1e6 + 10;
int pri[N];
int cnt;
bool st[N];
void isprime(int n){
	st[1] = true;
	for(int i = 2; i <= n; i ++ ){
		if(!st[i]) pri[cnt ++ ] = i;
		for(int j = 0; pri[j] * i <= n && j < cnt; j ++ ){
			st[i * pri[j]] = true;
			if(i % pri[j] == 0) break;
		}
	}
}
int main(){
	isprime(N - 1);
	int T;
	cin >> T;
	while(T -- ){
		int m, n;
		cin >> m >> n;
		bool fg = false;
		for(int j = 0; j < cnt; j ++ ){
			if(pri[j] >= m && pri[j] <= n){
				fg = true;
				cout << pri[j] << " ";
			}
		}
		if(!fg) cout << -1;
		cout << endl;
	}
	return 0;
}
```

**埃式筛**

```c++
int primes[N], cnt;     // primes[]存储所有素数
bool st[N];         // st[x]存储x是否被筛掉

void get_primes(int n)
{
    for (int i = 2; i <= n; i ++ )
    {
        if (st[i]) continue;
        primes[cnt ++ ] = i;
        for (int j = i + i; j <= n; j += i)
            st[j] = true;
    }
}
```

# **7-3 凯撒密码-加密**

```c++
#include<bits/stdc++.h>
using namespace std;
const int N = 1e6 + 10;

int main(){
	string s;
	getline(cin, s);
	for(auto &i : s){
		if(isalpha(i)){
			i = i + 3;
			if(!isalpha(i)) i = i - 26;
		}
		cout << i;
	}
	
	return 0;
}
```

# **7-4 螺旋方阵**

```c++
int main(){
	int n;
	cin >> n;
	vector<vector<int>> a(n, vector<int>(n, 0));
	int cur = n * n;
	int row = n - 1, col = n;
	while(cur > 0){
		while(col > 0 && !a[row][col - 1]) a[row][-- col] = cur -- ;
		while(row > 0 && !a[row - 1][col]) a[-- row][col] = cur -- ;
		while(col < n && !a[row][col + 1]) a[row][++ col] = cur -- ;
		while(row < n && !a[row + 1][col]) a[++ row][col] = cur -- ;
	}
	for(int i = 0; i < n; i ++ ){
		for(int j = 0; j < n; j ++ ){
			cout << setw(4) << setiosflags(ios::left) << a[i][j] << " \n"[j == n - 1];
		}
	}
	return 0;
}
```

# 7-14 与7无关的正整数

```c++
#include<bits/stdc++.h>
using namespace std;
using LL = long long;
bool jud(int n){
	if(n % 7 == 0) return true;
	while(n){
		if(n % 10 == 7) return true;
		n /= 10;
	}
	return false;
}
int main(){
	int n, sum = 0;
	cin >> n;
	for(int i = 1; i <= n; i ++ ){
		if(!jud(i)) sum += i * i;
	}
	cout << sum;
	return 0;
}
```

# 7-15 凯撒密码(有坑)

```c++
int main(){
	string s;
	getline(cin, s);
	int k;
	cin >> k;
	for(auto &i : s){
		if(isupper(i)){
			int t = (k + 26) % 26;
			i = i + t;
			if(!isalpha(i)) i = i - 26;
		}
		else if(islower(i)){
			int t = (k + 26) % 26;
			i = i + t;
			if(!isalpha(i)) i = i - 26;
		}
		cout << i;
	}
	return 0;
}
```

# 7-16 校门外的树（样例缺少）

# 7-17 n阶间断折叠方阵

```c++
#include<bits/stdc++.h>
using namespace std;
const int N = 1e6 + 10;

int main(){
	int n;
	cin >> n;
	vector<vector<int>> a(n + 1, vector<int>(n + 1));
	a[1][1] = 1;
	int cnt = 2;
	for(int i = 2; i <= n; i ++ ){
		for(int j = 1; j <= i; j ++ ){
			a[j][i] = cnt ++ ;
		}
		for(int j = i - 1; j >= 1; j -- ){
			a[i][j] = cnt ++ ;
		}
	}
	for(int i = 1; i <= n; i ++ ){
		for(int j = 1; j <= n; j ++ ){
			printf("%4d", a[i][j]);
		}
		printf("\n");
	}
	return 0;
}
```

# 7-18 猴子跳台阶

```c++
int monkey(int n){
	if(n == 1 || n == 2) return 1;
	if(n == 3) return 2;
	return monkey(n - 1) + monkey(n - 3);
}
int main(){
	int n;
	cin >> n;
	cout << monkey(n) << endl;
	return 0;
}
```

# 7-19 N阶楼梯上楼问题

```c++
int main(){
	int n;
    cin >> n;
	vector<LL> a(50);
	a[1] = 1;
	a[2] = 2;
	for(int i = 3; i <= n; i ++ ){
		a[i] = a[i - 1] + a[i - 2];
	}
	cout << a[n] << endl;

	return 0;
}
```

# 7-3 错拿帽子问题

```c++
int cal(int n){
	if(n == 1) return 0;
	if(n == 2) return 1;
	return (n - 1) * (cal(n - 1) + cal(n - 2));
}
int main(){
	int n;
	cin >> n;
	cout << cal(n) << endl;
	return 0;
}
```

# 7-5 杨辉三角

```c++
int main(){
	int n;
	cin >> n;
	vector<vector<int>> a(n + 1, vector<int>(n));
	for(int i = 1; i <= n; i ++ ){
		for(int j = 1; j <= i; j ++ ){
			if(j == 1 || j == i) a[i][j] = 1;
			else{
				a[i][j] = a[i - 1][j - 1] + a[i - 1][j];
			}
		}
	}
	for(int i = 1; i <= n; i ++ ){
		for(int j = 1; j <= i; j ++ ){
			printf("%4d", a[i][j]);
		}
		printf("\n");
	}
	return 0;
}
```

# 7-6 数列递推式

```c++
#include<bits/stdc++.h>
using namespace std;
const int N = 1e5 + 10;
int main(){
	int n;
	cin >> n;
	vector<int> a(n + 1, 0);
	a[1] = 1;
	int maxx = a[1];
	for(int i = 2; i <= n; i ++ ){
		if(i & 1){
			a[i] = a[(i - 1) / 2] + a[(i - 1) / 2 + 1];
		}
		else{
			a[i] = a[i / 2] + 1;
		}
		maxx = max(maxx, a[i]);
	}
	printf("a[%d]=%d,max=%d", n, a[n], maxx);
	return 0;
}
```

# 7-25 粒子裂变

```C++
#include<bits/stdc++.h>
using namespace std;
const int N = 1e5 + 10;
int main(){
	int n;
	cin >> n;
	vector<int> t(n + 1);//记录beta粒子数目
	t[0] = 0;
	t[1] = 3;
	for(int i = 2; i <= n; i ++ ){
		t[i] = 3 * t[i - 2] + 2 * t[i - 1];
	}
	printf("%d,%d", t[n - 1], t[n]);
	return 0;
}
```

# 7-26 百鸡问题扩展-N鸡问题（样例不全）

```c++
int main(){
	int n;
	cin >> n;
	int cnt = 0;
	int sum = 0;
	for(int i = 0; i <= n / 5; i ++ ){
		for(int j = 0; j <= n / 3; j ++ ){
			int k = n - 5 * i - 3 * j;
			if(3 * k + i + j == n){
				cnt ++ ;
				sum += i;
			}
		}
	}
	if(cnt == 0) cout << cnt << " " << -1 << endl;
	else cout << cnt << " " << sum << endl;
	return 0;
}
```



# **7-1 计算Fibonacci数列—递归**

# **7-2 Catalan数**

```c++
int fack(int n){
	if (n == 1) return 1;
	else return  (4 * n - 2) * fack(n - 1)/(n+1);
}
```

# **7-3 猴子吃桃**

```c++
int cal(int n){
	if(n == 1) return 1;
	return 2 * cal(n - 1) + 2;
}
int main(){
	int n;
	while(cin >> n){
		cout << cal(n) << endl;
	}
	return 0;
}
```

# **7-4 骨牌铺方格**

```c++
#include<bits/stdc++.h>
using namespace std;
using LL = long long;
int main(){
	int n;
	vector<LL> a(55);	
	a[1] = 1;
	a[2] = 2;
	while(cin >> n){
		for(int i = 3; i <= n; i ++ ){
			a[i] = a[i - 1] + a[i - 2];
		}
		cout << a[n] << endl;
	}
	return 0;
}
```

# 7-27 实现KMP

```c++
int main(){
	int n;
	cin >> n;
	for(int k = 1; k <= n; k ++ ){
		string s1, s2;
		vector<int> ne(n + 10);
		cin >> s1 >> s2;
		int len1 = (int)s1.size();
		int len2 = (int)s2.size();
		s1 = ' ' + s1;
		s2 = ' ' + s2;
		for(int i = 2, j = 0; i <= len2; i ++ ){
			while(j && s2[i] != s2[j + 1]) j = ne[j];
			if(s2[i] == s2[j + 1]) j ++ ;
			ne[i] = j;
		}
		bool fg = false;
		for(int i = 1, j = 0; i <= len1; i ++ ){
			while(j && s1[i] != s2[j + 1]) j = ne[j];
			if(s1[i] == s2[j + 1]) j ++ ;
			if(j == len2){
				fg = true;
				cout << i - j << endl;
				j = ne[j];
			}
		}
		if(!fg) cout << "not find!" << endl;
	}
	return 0;
}

```

# 7-28 选择法排序

sort

# 7-29 顺序表区间元素删除

```c++
#include<bits/stdc++.h>
using namespace std;
const int N = 110;
int main(){
	int n;
	cin >> n;
	vector<int> a(n), b;
	for(int i = 0; i < n; i ++ ){
		cin >> a[i];
	}
	int x, y;
	cin >> x >> y;
	for(int i = 0; i < n; i ++ ){
		if(a[i] < x || a[i] > y) b.push_back(a[i]);
	}
	for(int i = 0; i < (int)b.size(); i ++ ){
		cout << b[i] << " \n"[i == (int)b.size() - 1];
	}
	return 0;
}
```

# 7-30 删除数组中重复的元素

```c++
int main(){
	int n;
	cin >> n;
	vector<int> a(n);
	set<int> st; 
	for(int i = 0; i < n; i ++ ){
		cin >> a[i];
		st.insert(a[i]);
	}
	for(int i = 0; i < n; i ++ ){
		if(st.find(a[i]) != st.end()){
			cout << a[i] << " ";
			st.erase(a[i]);
		}
	}
	return 0;
}
```

# 7-31 约分最简式（缺少样例）

# 7-32 大整数是否整除11

```c++
int main() {
	string s;
	cin >> s;
	int oddsum = 0;
	int evensum = 0;
	for(int i = 0; i < (int)s.size(); i ++ ){
		if(i & 1) oddsum += s[i] - '0';
		else evensum += s[i] - '0';
	}
	int diff = abs(oddsum -evensum);
	if(diff % 11 == 0){
		string quotient = to_string(stoll(s) / 11);
		cout << "Yes " << quotient << endl;
	}
	else{
		string remainder = to_string(diff % 11);
		cout << "No " << remainder << endl;
	}
	
	return 0;
}

```

# 7-33 快速排序QuickSort

```c++
#include<bits/stdc++.h>
using namespace std;
int n;
int Partition(vector<int>&arr, int l, int r){
	int i = l, j = r;
	while(i < j){
		while(i < j && arr[i] <= arr[j]) j -- ;
		if(i < j){
			swap(arr[i], arr[j]);
			i ++ ;
		}
		while(i < j && arr[i] <= arr[j]) i ++ ;
		if(i < j){
			swap(arr[i], arr[j]);
			j -- ;
		}
	} 
	for(int i = 0; i < n; i ++ ){
		cout << arr[i] << " \n"[i == n - 1];
	}

	return i;
	
}
void quick_sort(vector<int>&arr, int l, int r){
	if(l < r){
		int pivot = Partition(arr, l, r);
		if(is_sorted(arr.begin(), arr.end())) return ;
		quick_sort(arr, l, pivot - 1);
		quick_sort(arr, pivot + 1, r);
	}
}
int main() {
	cin >> n;
	vector<int> arr(n);
	for (int i = 0; i < n; i++) {
		cin >> arr[i];
	}
	quick_sort(arr, 0, n - 1);
	for(int i = 0; i < n; i ++ ){
		cout << arr[i] << " \n"[i == n - 1];
	}
	return 0;
}

```

# 7-34 最大子列和问题

```c++
int main() {
	int n;
	cin >> n;
	vector<int> a(n);
	for(int i = 0; i < n; i ++ ){
		cin >> a[i];
	}
	int sum = 0, tsum = 0;
	for(int i = 0; i < n; i ++ ){
		tsum += a[i];
		if(tsum < 0){
			tsum = 0;
		}
		else if(tsum > sum){
			sum = tsum;
		}
	}
	cout << sum;
	return 0;
}

```



# **7-1 【模板】KMP字符串匹配**

```c++
cost int N = 1e6 + 10;
char s1[N], s2[N];
int ne[N];
int main(){
	cin >> s1 + 1 >> s2 + 1;
	int l1 = strlen(s1 + 1), l2 = strlen(s2 + 1);
	for(int i = 2, j = 0; i <= l2; i ++ ){
		while(j && s2[i] != s2[j + 1]) j = ne[j];
		if(s2[i] == s2[j + 1]) j ++ ;
		ne[i] = j;
	}
	for(int i = 1, j = 0; i <= l1; i ++ ){
		while(j && s1[i] != s2[j + 1]) j = ne[j];
		if(s1[i] == s2[j + 1]) j ++ ;
		if(j == l2){
			cout << i - j + 1 << endl;
			j = ne[j];
		}
	}
	for(int i = 1; i <= l2; i ++ ){
		cout << ne[i] << " \n"[i == l2];
	}
	return 0;
}
```

# **7-2 我爱全排类**

```c++
#include<bits/stdc++.h>
#define endl '\n'
using namespace std;
char num[26] = {'A', 'B', 'C', 'D', 'E',
	'F', 'G', 'H', 'I', 'J', 'K', 'L',
	'M', 'N', 'O', 'P', 'Q', 'R', 'S',
	'T', 'U', 'V', 'W', 'X', 'Y', 'Z'};
int main(){
	int n;
	cin >> n;
	do{
		for(int i = 0; i < n; i ++ ){
			cout << num[i];
		}
		cout << endl;
	}while(next_permutation(num, num + n));
	return 0;
}
```

# **7-3 选择排序**

```c++
int main(){
	int n;
	cin >> n;
	vector<int> a(n);
	for(int i = 0; i < n; i ++ ){
		cin >> a[i];
	}
	for(int i = 0; i < n - 1; i ++ ){
		if(is_sorted(a.begin(), a.end())) break;
		
		int minn = 0x3f3f3f3f, idx = 0;
		for(int j = i; j < n; j ++ ){
			if(minn > a[j]){
				minn = a[j];
				idx = j;
			}
		}
		if(i != idx){
			swap(a[i], a[idx]);
			for(int j = 0; j < n; j ++ ){
				cout << a[j] << " \n"[j == n - 1];
			}
		}
		
	}
	return 0;
}
```

# **7-4 冒泡排序**

```c++
int main(){
	int n;
	cin >> n;
	vector<int> a(n);
	for(int i = 0; i < n; i ++ ){
		cin >> a[i];
	}
	for(int i = 0; i < n - 1; i ++ ){
		if(is_sorted(a.begin(), a.end())) break;
		for(int j = 0; j < n - i - 1; j ++ ){
			if(a[j] > a[j + 1]) swap(a[j], a[j + 1]);
		}
		for(int j = 0; j < n; j ++ ){
			cout << a[j] << " \n"[j == n - 1];
		}
	}
	return 0;
}
```

# 7-35 棋盘覆盖(不够时间)

# 7-36 平面上的最近点对距离(不够时间)

# 7-37 方格涂色问题

```c++
#include<bits/stdc++.h>
using namespace std;
int cal(int n){
	if(n == 1) return 3;
	if(n == 2 || n == 3) return 6;
	return cal(n - 1) + 2 * cal(n - 2);
}
int main() {
	int n;
	cin >> n;
	cout << cal(n) << endl;
	return 0;
}

```

# 7-39 折半范围查找

```c++
#include<bits/stdc++.h>
using namespace std;
int main() {
	int n;
	cin >> n;
	vector<int> a(n);
	for(int i = 0; i < n; i ++ ) cin >> a[i];
	int minn, maxx;
	cin >> minn >> maxx;
	auto pos = find(a.begin(), a.end(), minn);
	int l1 = distance(a.begin(), pos);
	auto poss = find(a.begin(), a.end(), maxx);
	int l2 = distance(a.begin(), poss);
	cout << l2 - l1 + 1 << endl;
	return 0;
}

```

# 7-40 求乘方的末尾数字

```c++
#include<bits/stdc++.h>
using namespace std;
using LL = long long;
LL qmi(LL n, LL m){
	if(m == 1) return n;
	LL res = 1;
	while(m){
		if(m & 1) res = res * n % 1000;
		m >>= 1;
		n = n * n % 1000;
	}
	return res;
}
int main() {
	LL n, m;
	cin >> n >> m;
	if(n == 1){
		cout << "001" << endl;
		return 0;
	}
	LL res = qmi(n, m);
	printf("%03lld", res);
	return 0;
}

```

# 7-44 汽车加油问题

```c++
#include<bits/stdc++.h>
using namespace std;
using LL = long long;

int main() {
	int n, k;
	cin >> n >> k;
	vector<int> a(k + 2);
	for(int i = 1; i <= k + 1; i ++ ){
		cin >> a[i];
	}
	int sum = n;
	int cnt = 0;
	for(int i = 1; i <= k + 1; i ++ ){
		if(sum >= a[i]) sum -= a[i];
		else{
			sum = n;
			if(sum < a[i]){
				cout << "No Solution!" << endl;
				return 0;
			}
			sum -= a[i];
			cnt ++ ;
		}
	}
	cout << cnt << endl;
	return 0;
}

```

# 7-45 埃及分数

```c++
int main() {
	int n, m;
	cin >> n >> m;
	cout << n << "/" << m << "=";
	while(n > 1){
		int c = m / n + 1;
		cout << "1/" << c << "+";
		n = n * c - m;
		m = m * c;
		int ggg = __gcd(n, m);
		if(ggg > 1){
			n /= ggg;
			m /= ggg;
		}
	}
	cout << "1/" << m << endl;
	return 0;
}
```



# 7-1 大整数除法

```c++
#include<bits/stdc++.h>
using namespace std;
vector<int> cal(vector<int>&A, vector<int>&B){
	vector<int> C(A.size() + B.size() + 7, 0);
	for(int i = 0; i < (int)A.size(); i ++ ){
		for(int j = 0; j < (int)B.size(); j ++ ){
			C[i + j] += A[i] * B[j];
		}
	}
	int t = 0;
	for(int i = 0; i < (int)C.size(); i ++ ){
		t += C[i];
		C[i] = t % 10;
		t /= 10;
	}
	while(C.size() > 1 && C.back() == 0) C.pop_back();
	return C;
}
int main(){
	string a, b;
	while(cin >> a >> b){
		vector<int> A, B;
		for(int i = (int)a.size() - 1; i >= 0; i -- ){
			A.push_back(a[i] - '0');
		}
		for(int i = (int)b.size() - 1; i >= 0; i -- ){
			B.push_back(b[i] - '0');
		}
		vector<int> C = cal(A, B);
		for(int i = (int)C.size() - 1; i >= 0; i -- ){
			cout << C[i];
		}
		cout << endl;
	}
}
```

# 7-1 快速幂运算

```c++
#include<bits/stdc++.h>
using namespace std;
using LL = long long;
LL qmi(LL x, LL y){
	if(y == 1) return x;
	LL res = 1;
	while(y){
		if(y & 1) res = res * x % 1000;
		y >>= 1;
		x = x * x % 1000;
	}
	return res;
}
int main(){
	LL x, y;
	cin >> x >> y;
	if(x == 1){
		cout << x << endl;
		return 0;
	}
	cout << qmi(x, y) << endl;
	return 0;
}
```

# **7-2 8204 假币**

多组输入，一堆数相等，这堆数都是真的，一堆数不相等，这堆数之外的都是真的，判断不确定的数的数量是否唯一。

```c++
#include<bits/stdc++.h>
using namespace std;
bool st[110];
int main() {
	int N, K;
	while(cin >> N >> K){
        memset(st, 0, sizeof st);
		for (int i = 0; i < K; i++) {
			int siz;
            cin >> siz;
            char ch;
            vector<int> num(2 * siz);
            for(int i = 0; i < 2 * siz; i ++ ){
                cin >> num[i];
            }
            cin >> ch;
            if(ch == '='){
                for(auto i : num){
                    st[i] = true;
                }
            }
            else{
                for(int i = 1; i <= N; i ++ ){
                    if(find(num.begin(), num.end(), i) == num.end()){
                        st[i] = true;
                    }
                }
            }
		}
        int cnt = 0, ans = 0;
        for(int i = 1; i <= N; i ++ ){
            if(!st[i]){
                cnt ++ ;
                ans = i;
            }
        }
        if(cnt != 1) cout << 0 << endl;
        else cout << ans << endl;
	}
	return 0;
}

```

# 7-1 月饼

```c++
#include<bits/stdc++.h>
using namespace std;
struct Node{
	double own;
	double price;
	double sum_price;
	bool operator<(const Node & W)const{
		return price > W.price;
	}
};
int main(){
	double n, d;
	while(scanf("%lf %lf", &n, &d) != EOF){
		vector<Node> v(n);
		for(int i = 0; i < n; i ++ ){
			cin >> v[i].own;
		}
		for(int i = 0; i < n; i ++ ){
			cin >> v[i].sum_price;
			v[i].price = v[i].sum_price / v[i].own;
		}
		sort(v.begin(), v.end());
		double ans = 0;
		for(int i = 0; i < n; i ++ ){
			if(d > v[i].own){
				d -= v[i].own;
				ans += v[i].sum_price;
			}
			else{
				ans += d * v[i].price;
				break;
			}
		}
		printf("%.2f", ans);
	}
	return 0;
}
```

# **7-2 装箱问题**

```c++
#include<bits/stdc++.h>
using namespace std;
typedef pair<int, int> PII;
int main(){
	int n;
	cin >> n;
	vector<int> a(n);
	for(int i = 0; i < n; i ++ ){
		cin >> a[i];
	}
	vector<PII> v;
	v.push_back(make_pair(1, 100));
	for(int i = 0; i < n; i ++ ){
		bool fg = false;
		for(auto &[x, y] : v){
			if(y >= a[i]){
				fg = true;
				y -= a[i];
				cout << a[i] << " " << x << endl;
				break;
			}	
		}
		if(!fg){
			cout << a[i] << " " << (int)v.size() + 1 << endl;
			v.push_back(make_pair((int)v.size() + 1, 100 - a[i]));
		}
	}
	cout << (int)v.size() << endl;
	return 0;
}
```

# **7-3 最小生成树构造**

```c++
#include<bits/stdc++.h>
using namespace std;
typedef pair<int, int> PII;
const int N = 25;
int v[N][N];
int dist[N], pre[N];
bool vis[N];
int n, m;
void prim(){
	memset(dist, 0x3f, sizeof dist);
	dist[1] = 0;
	for(int i = 0; i < n; i ++ ){
		int t = -1;
		for(int j = 1; j <= n; j ++ ){
			if(!vis[j] && (t == -1 || dist[t] > dist[j])){
				t = j;
			}
		}
		vis[t] = true;
		for(int j = 1; j <= n; j ++ ){
			if(!vis[j] && dist[j] > v[t][j]){
				dist[j] = v[t][j];
				pre[j] = t;
			}
		}
		if(t != 1){
			if(pre[t] < t) cout << pre[t] << "," << t << "," << v[pre[t]][t] << endl;
			else cout << t << "," << pre[t] << "," << v[t][pre[t]] << endl;
		}
	}
}
int main(){
	
	cin >> n >> m;
	for(int i = 1; i <= n; i ++ ){
		for(int j = 1; j <= n; j ++ ){
			if(i == j) v[i][j] = 0;
			else v[i][j] = 0x3f3f3f3f;
		}
	}
	for(int i = 0; i < m; i ++ ){
		int a, b, w;
		cin >> a >> b >> w;
		v[a][b] = v[b][a] = min(v[a][b], w);
	}
	prim();
	return 0;
}
```

# **7-1 最长公共子串**

```c++
#include<bits/stdc++.h>
using namespace std;
int main(){
	int T;
	cin >> T;
	for(int i = 0; i < T; i ++ ){
		string s, t;
		cin >> s >> t;
		int len1 = (int)s.size(), len2 = (int)t.size();
		vector<vector<int>> dp(len1 + 1, vector<int>(len2 + 1));
		for(int i = 1; i <= len1; i ++ ){
			for(int j = 1; j <= len2; j ++ ){
				if(s[i - 1] == t[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
				else dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
			}
		}
		cout << dp[len1][len2] << endl;
		string ans = "";
		while(len1 && len2){
			if(s[len1 - 1] == t[len2 - 1]){
				ans = s[len1 - 1] + ans;
				len1 -- ;
				len2 -- ;
			}
			else if(dp[len1][len2 - 1] > dp[len1 - 1][len2]) len2 -- ;
			else len1 -- ;
		}
		cout << ans << endl;
	}
	return 0;
}
```

# **7-2 0-1背包问题**

```c++
#include<bits/stdc++.h>
using namespace std;
int main(){
	int n, m;
	while(scanf("%d %d", &n, &m) != EOF){
		vector<int> w(n), v(n), f(m + 1);
		for(int i = 0; i < n; i ++ ){
			cin >> w[i];
		}
		for(int i = 0; i < n; i ++ ){
			cin >> v[i];
		}
		for(int i = 0; i < n; i ++ ){
			for(int j = m; j >= w[i]; j -- ){
				f[j] = max(f[j], f[j - w[i]] + v[i]);
			}
		}
		cout << f[m] << endl;
		
	}
	return 0;
}

```

# **7-1 求解矩阵最小路径和问题**(还没看)

```c++
#include<bits/stdc++.h>
using namespace std;
const int N = 110;
int g[N][N], dp[N][N], pre[N][N];
int m, n, cnt;

int main(){
    cin >> m >> n;
    for(int i = 0; i < m; i ++ ){
        for(int j = 0; j < n; j ++ ){
            cin >> g[i][j];
        }
    }
    dp[0][0] = g[0][0];
    for(int i = 1; i < m; i ++ ){
        dp[i][0] = dp[i - 1][0] + g[i][0];
        pre[i][0] = 0;
    }
    for(int i = 1; i < n; i ++ ){
        dp[0][i] = dp[0][i - 1] + g[0][i];
        pre[0][i] = 1;
    }
    for(int i = 1; i < m; i ++ ){
        for(int j = 1; j < n; j ++ ){
            if(dp[i - 1][j] < dp[i][j - 1]){
                dp[i][j] = dp[i - 1][j] + g[i][j];
                pre[i][j] = 0;
            }
            else{
                dp[i][j] = dp[i][j - 1] + g[i][j];
                pre[i][j] = 1;
            }
        }
    }
    vector<int> ans;
    for(int i = m - 1, j = n - 1; i > 0 || j > 0; ){
        ans.push_back(g[i][j]);
        if(!pre[i][j]) i -- ;
        else j -- ;
    }
    ans.push_back(g[0][0]);
    for(int i = (int)ans.size() - 1; i >= 0; i -- ){
        cout << ans[i] << " ";
    }
    cout << endl;
    cout << dp[m - 1][n - 1] << endl;
    return 0;
}
```

# 7-48 活动安排问题

```c++
#include<bits/stdc++.h>
using namespace std;
vector<bool> st;
int cal(int n, vector<int>&s, vector<int>&f){
	st[1] = true;
	int j = 1, cnt = 1;
	for(int i = 2; i <= n; i ++ ){
		if(s[i] >= f[j]){
			st[i] = true;
			j = i;
			cnt ++ ;
		}
		else st[i] = false;
	}
	return cnt;
}
int main(){
	int k;
	cin >> k;
	st.assign(k + 1, false);
	vector<int> s(k + 1), f(k + 1);
	for(int i = 1; i <= k; i ++ ) cin >> s[i];
	for(int i = 1; i <= k; i ++ ) cin >> f[i];
	sort(s.begin() + 1, s.end());
	sort(f.begin() + 1, f.end());
	cout << cal(k, s, f);
	return 0;
}

```

# 八数码问题

```c++
//八数码
#include<bits/stdc++.h>
using namespace std;
int bfs(string start){
    string end = "12345678x";
    queue<string> q;
    unordered_map<string, int> d;
    q.push(start);
    d[start] = 0;
    int dx[4] = {1, 0, -1, 0}, dy[4] = {0, 1, 0, -1};
    while(q.size()){
        auto t = q.front();
        q.pop();
        int distance = d[t];
        if(t == end)
            return distance;
        int k = t.find('x');
        int x = k / 3, y = k % 3;
        for(int i = 0; i < 4; i ++ ){
            int a = dx[i] + x, b = dy[i] + y;
            if(a >= 0 && a < 3 && b >= 0 && b < 3){
                swap(t[k], t[a * 3 + b]);
                if(!d.count(t)){
                    d[t] = distance + 1;
                    q.push(t);
                }
                swap(t[k], t[a * 3 + b]);
            }
        }
    }
    return -1;
}
int main(){
    string c, start;
    for(int i = 0; i < 9; i ++ ){
        cin >> c;
        start += c;
    }
    cout << bfs(start) << endl;
    return 0;
}
```

